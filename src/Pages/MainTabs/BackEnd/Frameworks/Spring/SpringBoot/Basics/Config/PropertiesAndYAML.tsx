import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PropertiesAndYAML = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Basics/Config/PropertiesAndYAML';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Properties & YAML" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PropertiesAndYAML;
