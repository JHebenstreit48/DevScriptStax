import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Services = () => {
  const markdownFilePath = 'FrontEnd/Angular/Testing/Unit/Services';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Unit Testing - Services" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Services;