import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const InitialConfiguration = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Basics/Setup/InitialConfiguration';

  return (
    <>
      <PageLayout>
        <PageTitle title="Initial Configuration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InitialConfiguration;
