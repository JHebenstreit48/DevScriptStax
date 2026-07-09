import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BundlerAndGemfile = () => {
  const markdownFilePath = 'Languages/Ruby/Basics/ProjectSetup/BundlerAndGemfile';

  return (
    <>
      <PageLayout>
        <PageTitle title="Bundler & Gemfile" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BundlerAndGemfile;
