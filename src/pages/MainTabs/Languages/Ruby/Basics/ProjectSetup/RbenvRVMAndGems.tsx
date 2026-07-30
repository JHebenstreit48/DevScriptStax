import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RbenvRVMAndGems = () => {
  const markdownFilePath = 'Languages/Ruby/Basics/ProjectSetup/RbenvRVMAndGems';

  return (
    <>
      <PageLayout>
        <PageTitle title="rbenv/RVM & Gems" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RbenvRVMAndGems;
