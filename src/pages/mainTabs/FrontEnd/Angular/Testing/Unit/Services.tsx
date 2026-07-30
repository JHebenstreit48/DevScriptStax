import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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