import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SharedPackages = () => {
  const markdownFilePath = 'Stacks/MERN/Advanced/Architecture/SharedPackages';

  return (
    <>
      <PageLayout>
        <PageTitle title="Shared Packages" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SharedPackages;
