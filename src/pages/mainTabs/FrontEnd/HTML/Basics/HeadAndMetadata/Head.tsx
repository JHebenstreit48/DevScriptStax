import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HeadElementS = () => {
  const markdownFilePath = 'FrontEnd/HTML/Basics/HeadAndMetadata/Head';

  return (
    <>
      <PageLayout>
        <PageTitle title="HTML - Basics - Head & Metadata - Head Elements" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HeadElementS;