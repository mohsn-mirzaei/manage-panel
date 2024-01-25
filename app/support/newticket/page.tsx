"use client";

import APIClient from "@/app/services/api-client";
import { useMutation } from "@tanstack/react-query";
import { Label, Textarea, Button, TextInput, Spinner } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  params: { ticket: string; token: string };
}

interface NewTicket {
  subject: string;
  description: string;
}

const apiClient = new APIClient("/newTicket");

const NewTicketPage = ({ params }: Props) => {
  const { handleSubmit, register, control, reset } = useForm();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (newTicket: NewTicket) => {
      return apiClient.post(newTicket);
    },
    onSuccess: (res) => {
      if (res.status === 201)
        return (
          reset(),
          toast.success("تیکت شما در نسخه دمو ثبت  شد ولی نشان داده نمی‌شود!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        );
      else
        toast.error("خطایی رخ داده است!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    },
    onError: (err) => console.log(err),
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data as NewTicket);
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label value="موضوع درخواست:" />
            </div>
            <TextInput required {...register("subject")} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="شرح درخواست:" />
            </div>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Textarea
                  placeholder="پیام خود را بنویسید..."
                  rows={4}
                  {...field}
                />
              )}
            />
          </div>
        </div>
        <div className="flex mt-4 gap-2">
          <Button
            type="submit"
            disabled={mutation.isPending}
            isProcessing={mutation.isPending}
            processingSpinner={<Spinner size="sm" className="mr-2" />}
          >
            ارسال درخواست
          </Button>
          <Button color="gray" onClick={() => router.push(`/support`)}>
            بازگشت
          </Button>
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default NewTicketPage;
