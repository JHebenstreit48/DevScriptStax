import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Variables = () => {
  const markdownFilePath = 'FrontEnd/CSS/Advanced/ResponseAndVariables/Variables';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSS Variables" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Variables;