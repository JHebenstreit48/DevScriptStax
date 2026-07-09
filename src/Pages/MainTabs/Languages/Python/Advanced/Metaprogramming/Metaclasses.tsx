import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Metaclasses = () => {
  const markdownFilePath = 'Languages/Python/Advanced/Metaprogramming/Metaclasses';

  return (
    <>
      <PageLayout>
        <PageTitle title="Metaclasses" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Metaclasses;
