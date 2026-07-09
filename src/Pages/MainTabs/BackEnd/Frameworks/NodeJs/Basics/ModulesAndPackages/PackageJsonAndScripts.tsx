import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PackageJsonAndScripts = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Basics/ModulesAndPackages/PackageJsonAndScripts';

  return (
    <>
      <PageLayout>
        <PageTitle title="package.json & Scripts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PackageJsonAndScripts;
