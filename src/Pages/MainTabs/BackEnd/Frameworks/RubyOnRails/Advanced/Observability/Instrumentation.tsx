import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Instrumentation = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Advanced/Observability/Instrumentation';

  return (
    <>
      <PageLayout>
        <PageTitle title="Instrumentation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Instrumentation;
