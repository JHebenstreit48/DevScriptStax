import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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