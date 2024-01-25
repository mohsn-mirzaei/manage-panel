"use client";

import Header from "@/app/components/Header";
import LoadingPage from "@/app/components/LoadingPage";
import NotFindPage from "@/app/components/NotFindPage";
import MessageBox from "@/app/components/messages/MessageBox";
import MessageFooter from "@/app/components/messages/MessageFooter";
import useConversations from "@/app/hook/useConversations";
import { Card } from "flowbite-react";

const ChatsPage = () => {
  const { data, isLoading, error } = useConversations();

  if (isLoading) return <LoadingPage />;

  if (error) return null;

  return (
    <>
      <Header title={data?.message} />
      {data?.conversations.length !== 0 ? (
        data?.conversations.map((conv) => (
          <Card key={conv[0].date_time} className="mt-5">
            <div className="flex flex-col gap-4">
              <MessageBox content={conv[0].question} align="right" />
              <MessageBox content={conv[0].answer} align="left" />
            </div>
            <MessageFooter
              date={conv[0].date_time}
              usedDiamond={conv[0].diamond}
            />
          </Card>
        ))
      ) : (
        <NotFindPage title="گفتگویی دریافت نشد!" />
      )}
    </>
  );
};

export default ChatsPage;
