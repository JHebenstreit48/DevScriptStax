import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
