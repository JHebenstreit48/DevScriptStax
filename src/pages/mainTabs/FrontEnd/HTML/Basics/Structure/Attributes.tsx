import PageLayout from '@/components/navigationUI/pageLayout'
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Attributes = () => {
  const markdownFilePath = 'FrontEnd/HTML/Basics/Structure/Attributes';

  return (
    <>
      <PageLayout>
        <PageTitle title="HTML Structure - Attributes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Attributes;