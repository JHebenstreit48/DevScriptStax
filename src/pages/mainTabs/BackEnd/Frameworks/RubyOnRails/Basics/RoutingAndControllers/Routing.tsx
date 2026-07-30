import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Routing = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Basics/RoutingAndControllers/Routing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Routing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Routing;
