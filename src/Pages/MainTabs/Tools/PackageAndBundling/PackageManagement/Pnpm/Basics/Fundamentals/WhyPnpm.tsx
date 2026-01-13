import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WhyPnpm = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Pnpm/Basics/Fundamentals/WhyPnpm';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Why pnpm?" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WhyPnpm;
