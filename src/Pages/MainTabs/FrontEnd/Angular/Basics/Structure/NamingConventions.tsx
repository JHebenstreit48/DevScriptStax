import PageLayout from '@/Components/NavigationUI/PageLayout';
import Notes from '@/Components/PageComponents/Notes/Notes';
import PageTitle from '@/Components/PageComponents/PageTitle';

const NamingConventions = () => {
  const markdownFilePath = 'FrontEnd/Angular/Basics/Structure/NamingConventions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Basics - Naming Conventions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NamingConventions;