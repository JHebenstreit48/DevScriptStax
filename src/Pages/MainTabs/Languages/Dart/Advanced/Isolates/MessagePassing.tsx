import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MessagePassing = () => {
  const markdownFilePath = 'Languages/Dart/Advanced/Isolates/MessagePassing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Message Passing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MessagePassing;
