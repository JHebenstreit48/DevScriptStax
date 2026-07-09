import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RouteVariants = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Advanced/Mocking/RouteVariants';

  return (
    <>
      <PageLayout>
        <PageTitle title="Route Variants" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RouteVariants;
