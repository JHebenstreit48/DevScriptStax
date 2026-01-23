import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RbenvRVMAndGems = () => {
  const markdownFilePath = 'Languages/Ruby/Basics/ProjectSetup/RbenvRVMAndGems';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="rbenv/RVM & Gems" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RbenvRVMAndGems;
