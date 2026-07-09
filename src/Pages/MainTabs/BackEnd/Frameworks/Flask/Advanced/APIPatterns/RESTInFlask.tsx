import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RESTInFlask = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Advanced/APIPatterns/RESTInFlask';

  return (
    <>
      <PageLayout>
        <PageTitle title="REST in Flask" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RESTInFlask;
