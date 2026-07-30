import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FunctionsAndPackages = () => {
  const markdownFilePath = 'Languages/Go/Basics/Fundamentals/FunctionsAndPackages';

  return (
    <>
      <PageLayout>
        <PageTitle title="Functions & Packages" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FunctionsAndPackages;
