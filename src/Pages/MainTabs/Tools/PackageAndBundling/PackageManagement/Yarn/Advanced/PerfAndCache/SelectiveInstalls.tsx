import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SelectiveInstalls = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Yarn/Advanced/PerfAndCache/SelectiveInstalls';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Selective Installs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SelectiveInstalls;
