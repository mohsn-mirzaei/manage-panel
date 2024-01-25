"use client";

import LoadingPage from "@/app/components/LoadingPage";
import useTickets from "@/app/hook/useTickets";
import APIClient from "@/app/services/api-client";
import { useMutation } from "@tanstack/react-query";
import classNames from "classnames";
import { Accordion, Button, Label, Spinner, Textarea } from "flowbite-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  params: { ticket: string };
}

interface ReplayTicket {
  description: string;
  ticket_no: string;
}

const apiClient = new APIClient("/replayTicket");

const TicketsDetailPage = ({ params }: Props) => {
  const { data, isLoading, error, refetch } = useTickets();
  const { handleSubmit, control, reset } = useForm();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (replayTicket: ReplayTicket) => {
      return apiClient.post({
        description: replayTicket.description,
      });
    },
    onSuccess: (res) => {
      if (res.status === 201)
        return (
          refetch(),
          reset({
            description: "",
          }),
          toast.success(
            "پاسخ تیکت شما در نسخه دمو ثبت  شد ولی نشان داده نمی‌شود!",
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          )
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
    mutation.mutate(data as ReplayTicket);
  });

  if (isLoading) return <LoadingPage />;

  if (error) return null;

  return (
    <>
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title>پاسخ دهید</Accordion.Title>
          <Accordion.Content>
            <form onSubmit={onSubmit}>
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
                    required
                    {...field}
                  />
                )}
              />
              <Button
                className="mt-4"
                type="submit"
                disabled={mutation.isPending}
                isProcessing={mutation.isPending}
                processingSpinner={<Spinner size="sm" className="mr-2" />}
              >
                ارسال درخواست
              </Button>
            </form>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
      {data?.tickets.map(
        (ticket) =>
          ticket.ticket_no === params.ticket &&
          ticket.detail.map((item) => (
            <div key={item.date_time} className="border mt-4">
              <div
                className={classNames({
                  "bg-gray-100": item.user_type === 0,
                  "bg-orange-100": item.user_type === 1,
                  "flex justify-between p-4": true,
                })}
              >
                <div className="flex items-center gap-2">
                  <FaUser
                    color={classNames({
                      "#fc6f03": item.user_type === 1,
                      "#383838": item.user_type === 0,
                    })}
                  />
                  <p className="text-sm font-semibold text-gray-500">
                    {item.user_name}
                  </p>
                </div>
                <p className="text-sm text-gray-400">{item.date_time}</p>
              </div>
              <div className="p-4">
                <p className="text-sm font-normal text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))
      )}
      <Button
        className="mt-4"
        color="gray"
        onClick={() => router.push(`/support`)}
      >
        بازگشت
      </Button>
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

export default TicketsDetailPage;
