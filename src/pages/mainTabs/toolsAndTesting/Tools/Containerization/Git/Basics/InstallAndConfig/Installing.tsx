import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Installing = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Basics/InstallAndConfig/Installing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Git - Installing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Installing;