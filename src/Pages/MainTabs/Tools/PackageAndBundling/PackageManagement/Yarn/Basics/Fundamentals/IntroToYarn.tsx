import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IntroToYarn = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Yarn/Basics/Fundamentals/IntroToYarn';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Intro to Yarn" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntroToYarn;
