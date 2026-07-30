import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Configuration = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Basics/InstallAndConfig/Configuration';

  return (
    <>
      <PageLayout>
        <PageTitle title="Git - Configuration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Configuration;