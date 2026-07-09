import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Controllers = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Basics/RoutingAndControllers/Controllers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Controllers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Controllers;
