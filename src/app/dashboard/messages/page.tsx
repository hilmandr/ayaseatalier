import Container from "@/components/container";
import Header from "@/components/dashboard/header";
import { getMessages } from "@/actions/message";
import Messages from "@/components/dashboard/messages";

export default async function MessagesPage() {
  const message = await getMessages();
  return (
    <>
      <div className=" flex w-full h-full bg-white text-sm">
        <Container>
          <Header />
          <div className=" flex flex-col w-full pt-8">
            <h1 className=" text-lg">Messages From Contact Page</h1>
            <Messages message={message} />
          </div>
        </Container>
      </div>
    </>
  );
}
