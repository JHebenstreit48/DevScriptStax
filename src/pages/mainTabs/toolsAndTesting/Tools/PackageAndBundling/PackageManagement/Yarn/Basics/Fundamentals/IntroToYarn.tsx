import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IntroToYarn = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Yarn/Basics/Fundamentals/IntroToYarn';

  return (
    <>
      <PageLayout>
        <PageTitle title="Intro to Yarn" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntroToYarn;
