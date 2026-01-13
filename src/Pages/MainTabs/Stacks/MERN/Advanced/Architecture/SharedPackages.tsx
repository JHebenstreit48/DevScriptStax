import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SharedPackages = () => {
  const markdownFilePath = 'Stacks/MERN/Advanced/Architecture/SharedPackages';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Shared Packages" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SharedPackages;
