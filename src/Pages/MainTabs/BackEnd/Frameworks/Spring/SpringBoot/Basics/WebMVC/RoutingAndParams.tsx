import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
