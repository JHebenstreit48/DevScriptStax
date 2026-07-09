import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BasicRouting = () => {
  const markdownFilePath = 'FrontEnd/React/Intermediate/Routing/BasicRouting';

  return (
    <>
      <PageLayout>
        <PageTitle title="Basic Routing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BasicRouting;
