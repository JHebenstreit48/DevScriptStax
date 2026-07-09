import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ResourceNamingConventions = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/RESTfulDesignPrinciples/ResourceNamingConventions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Resource Naming Conventions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ResourceNamingConventions;
