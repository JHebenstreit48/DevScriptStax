import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SharedLibraries = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Advanced/PluginsAndReuse/SharedLibraries';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Shared Libraries" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SharedLibraries;
