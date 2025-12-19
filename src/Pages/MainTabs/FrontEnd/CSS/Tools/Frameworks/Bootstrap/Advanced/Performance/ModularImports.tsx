import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ModularImports = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/Performance/ModularImports';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Modular Imports" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ModularImports;
