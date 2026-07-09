import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Props = () => {
  const markdownFilePath =
    'FrontEnd/React/Basics/CoreConcepts/PropsState/Props';

  return (
    <>
      <PageLayout>
        <PageTitle title="React Core Concepts - Props" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Props;
