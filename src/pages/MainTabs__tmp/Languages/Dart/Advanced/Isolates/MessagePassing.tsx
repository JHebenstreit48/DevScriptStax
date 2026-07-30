import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MessagePassing = () => {
  const markdownFilePath = 'Languages/Dart/Advanced/Isolates/MessagePassing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Message Passing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MessagePassing;
