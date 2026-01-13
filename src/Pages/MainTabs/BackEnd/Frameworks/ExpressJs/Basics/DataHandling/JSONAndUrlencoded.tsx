import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JSONAndUrlencoded = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJs/Basics/DataHandling/JSONAndUrlencoded';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JSON & urlencoded" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JSONAndUrlencoded;
