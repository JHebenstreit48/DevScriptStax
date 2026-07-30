import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const JSONAndUrlencoded = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Basics/DataAndBody/JSONAndUrlencoded';

  return (
    <>
      <PageLayout>
        <PageTitle title="JSON & urlencoded" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JSONAndUrlencoded;
