import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TSConfig = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Fundamentals/TSConfig';

  return (
    <>
      <PageLayout>
        <PageTitle title="TypeScript Basics - TSConfig" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TSConfig;