import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RoutingAndParams = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Basics/WebMVC/RoutingAndParams';

  return (
    <>
      <PageLayout>
        <PageTitle title="Routing & Params" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RoutingAndParams;
