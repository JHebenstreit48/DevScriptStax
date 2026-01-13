import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FunctionsAndPackages = () => {
  const markdownFilePath = 'Languages/Go/Basics/Fundamentals/FunctionsAndPackages';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Functions & Packages" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FunctionsAndPackages;
