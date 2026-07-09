import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Config = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Yarn/Basics/Setup/Config';

  return (
    <>
      <PageLayout>
        <PageTitle title="Config (.yarnrc*)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Config;
