import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PackageJsonAndScripts = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Basics/ModulesAndPackages/PackageJsonAndScripts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="package.json & Scripts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PackageJsonAndScripts;
