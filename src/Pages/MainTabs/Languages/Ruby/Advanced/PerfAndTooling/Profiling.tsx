import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Profiling = () => {
  const markdownFilePath = 'Languages/Ruby/Advanced/PerfAndTooling/Profiling';

  return (
    <>
      <PageLayout>
        <PageTitle title="Profiling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Profiling;
