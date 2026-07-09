import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JSONAndUrlencoded = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJS/Basics/DataHandling/JSONAndURLEncoded';

  return (
    <>
      <PageLayout>
        <PageTitle title="Express.js Data Handling - JSON & urlencoded" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JSONAndUrlencoded;