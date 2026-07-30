import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HeadElementS = () => {
  const markdownFilePath = 'FrontEnd/HTML/Intermediate/HeadAndMetadata/Head';

  return (
    <>
      <PageLayout>
        <PageTitle title="Head ElementS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HeadElementS;
