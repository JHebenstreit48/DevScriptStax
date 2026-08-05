import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SharedLibraries = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Advanced/PluginsAndReuse/SharedLibraries';

  return (
    <>
      <PageLayout>
        <PageTitle title="Shared Libraries" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SharedLibraries;
