import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Metaprogramming = () => {
  const markdownFilePath = 'Languages/Ruby/Advanced/Language/Metaprogramming';

  return (
    <>
      <PageLayout>
        <PageTitle title="Metaprogramming" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Metaprogramming;
