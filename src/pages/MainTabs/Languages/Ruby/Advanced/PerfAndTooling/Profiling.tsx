import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
