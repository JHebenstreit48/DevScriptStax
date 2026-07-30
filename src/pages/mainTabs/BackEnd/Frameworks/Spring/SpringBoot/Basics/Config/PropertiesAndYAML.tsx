import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PropertiesAndYAML = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Basics/Config/PropertiesAndYAML';

  return (
    <>
      <PageLayout>
        <PageTitle title="Properties & YAML" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PropertiesAndYAML;
